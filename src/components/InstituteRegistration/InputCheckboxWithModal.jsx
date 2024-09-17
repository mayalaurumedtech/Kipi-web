import React, { useState, useEffect } from 'react';
import Buttons from '../custom/Buttons';
import Modal from '../custom/Modal';
import InputCheckbox from '../custom/InputCheckbox';
import Accordion from '../custom/Accordion';
import { Svg } from '../../utils/constant/Svg';
import styles from './style/InputCheckboxWithModal.module.css';

const StdList = [
    // G.S.E.B Gujarati Medium
    { id: 1, SchoolId: 1, title: "9th", checked: false },
    { id: 2, SchoolId: 1, title: "10th", checked: false },
    { id: 3, SchoolId: 1, title: "11th", checked: false },
    { id: 4, SchoolId: 1, title: "12th", checked: false },
    // G.S.E.B Hindi Medium
    // { id: 5, SchoolId: 2, title: "9th", checked: false },
    // { id: 6, SchoolId: 2, title: "10th", checked: false },
    // { id: 7, SchoolId: 2, title: "11th", checked: false },
    // { id: 8, SchoolId: 2, title: "12th", checked: false },
    // G.S.E.B English Medium
    // { id: 9, SchoolId: 3, title: "9th", checked: false },
    // { id: 10, SchoolId: 3, title: "10th", checked: false },
    // { id: 11, SchoolId: 3, title: "11th", checked: false },
    // { id: 12, SchoolId: 3, title: "12th", checked: false },
    // C.B.S.E Hindi Medium
    // { id: 13, SchoolId: 4, title: "9th", checked: false },
    // { id: 14, SchoolId: 4, title: "10th", checked: false },
    // { id: 15, SchoolId: 4, title: "11th", checked: false },
    // { id: 16, SchoolId: 4, title: "12th", checked: false },
    // C.B.S.E English Medium
    // { id: 17, SchoolId: 5, title: "9th", checked: false },
    // { id: 18, SchoolId: 5, title: "10th", checked: false },
    // { id: 19, SchoolId: 5, title: "11th", checked: false },
    // { id: 20, SchoolId: 5, title: "12th", checked: false },
    // ICSE/ISC Gujarati Medium
    // { id: 21, SchoolId: 6, title: "9th", checked: false },
    // { id: 22, SchoolId: 6, title: "10th", checked: false },
    // { id: 23, SchoolId: 6, title: "11th", checked: false },
    // { id: 24, SchoolId: 6, title: "12th", checked: false },
    // ICSE/ISC Hindi Medium
    // { id: 25, SchoolId: 7, title: "9th", checked: false },
    // { id: 26, SchoolId: 7, title: "10th", checked: false },
    // { id: 27, SchoolId: 7, title: "11th", checked: false },
    // { id: 28, SchoolId: 7, title: "12th", checked: false },
    // ICSE/ISC English Medium
    // { id: 29, SchoolId: 8, title: "9th", checked: false },
    // { id: 30, SchoolId: 8, title: "10th", checked: false },
    // { id: 31, SchoolId: 8, title: "11th", checked: false },
    // { id: 32, SchoolId: 8, title: "12th", checked: false },
];

const SubjectList = [
    { id: 1, label: "Mathematics", checked: false, StdId: 1 },
    { id: 2, label: "Science", checked: false, StdId: 1 },
    { id: 3, label: "Social Studies", checked: false, StdId: 2 },
    { id: 4, label: "English", checked: false, StdId: 2 },
    { id: 5, label: "Hindi", checked: false, StdId: 3 },
    { id: 6, label: "Kannada", checked: false, StdId: 3 },
    { id: 7, label: "Physics", checked: false, StdId: 4 },
];

const InputCheckboxWithModal = ({ checked, onChange, svg, borderLeft, titalText, peraText = "NA", isActive, lineClamp }) => {
    const [Stds, setStds] = useState(StdList);
    const [subjects, setSubjects] = useState(SubjectList);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalButton, setModalButton] = useState("Select Standard & Subjects");
    const [submit, setSubmit] = useState(false);
    const [count, setCount] = useState({});

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Update standards based on selected subjects
    useEffect(() => {
        const c = count;
        const updatedStds = Stds.map((std) => {
            const hasSelectedSubjects = subjects.some(
                (subject) => {
                    if (subject.StdId === std.id && subject.checked) {
                        return true
                    }
                    return false;
                }
            );
            if (hasSelectedSubjects) {
                setModalButton("Edite")
            }
            return { ...std, checked: hasSelectedSubjects };
        });

        setStds(updatedStds);
        const stdCount = updatedStds.filter(s => s.checked);
        const subCount = subjects.filter(s => s.checked)

        setCount({
            subject: subCount.length,
            standard: stdCount.length
        })
    }, [subjects, submit]);

    // Handle checkbox change for subjects
    const handleCheckboxChangeSubject = (subjectId) => {
        setSubjects((prevSubjects) =>
            prevSubjects.map((subject) =>
                subject.id === subjectId ? { ...subject, checked: !subject.checked } : subject
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        closeModal();
    };

    // Create accordion sections based on StdList and SubjectList
    const accordionSections = Stds.map((Std) => ({
        title: (
            <InputCheckbox
                key={Std.id}
                checked={Std.checked}
                titalText={Std.title}
                svg={Svg.Award}
            />
        ),
        content: (
            <>
                {subjects
                    .filter((Subject) => Subject.StdId === Std.id)
                    .map((Subject) => (
                        <InputCheckbox
                            key={Subject.id}
                            checked={Subject.checked}
                            onChange={() => handleCheckboxChangeSubject(Subject.id)}
                            label={Subject.label}
                            checkboxContainer="checkboxContainer mediumAccodiancheckbox mx-6"
                        />
                    ))}
            </>
        )
    }));

    return (
        <>
            <div className="flex justify-between mediumAccodiancheckbox">
                <div className={`flex gap-2 items-center pb-1 checkboxContainer ${(isActive ? "active" : "")}`} onClick={onChange}>
                    <input
                        type="checkbox"
                        className={`roundedCheckbox ${borderLeft}`}
                        checked={checked}
                        readOnly
                    />
                    {svg && (
                        <div className="svg">{svg}</div>
                    )}
                    {titalText && (
                        <div className="input-title-box">
                            <h3 className={`title ${checked ? "text-primaryBlack" : "text-secondaryGrey02"}`}>
                                {titalText}
                            </h3>
                            <p className={`paragraph2 ${lineClamp} ${count.standard && count.subject ? "text-primaryBlack" : "text-secondaryGrey02"}`}>{count.standard > 0 ? count.standard + ' standar and ' + count.subject + ' subject selected' : checked ? "Nothing Select Yet" : peraText}</p>
                        </div>
                    )}
                </div>
                {checked && (
                    <Buttons
                        path=""
                        text={modalButton}
                        className="border border-primaryDarkBlue px-7 rounded-xl text-base font-medium"
                        onClick={openModal}
                    />
                )}
            </div>

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <form className={styles.AccordionModal} onSubmit={handleSubmit}>
                        <h2 className="title">Select Standard & Subjects</h2>
                        <p className="paragraph2">Primary (Gujarati Medium)</p>
                        <div className="pt-6 flex flex-col gap-8">
                            {accordionSections.length > 0 ? (
                                <Accordion sections={accordionSections} />
                            ) : (
                                <p className="text-center">No Standard Found!</p>
                            )}
                        </div>

                        <Buttons type="submit" text="Submit" buttonStyle="cus-blue-buttons mt-4 sm:mt-8" />
                    </form>
                </Modal>
            )}
        </>
    );
};

export default InputCheckboxWithModal;
