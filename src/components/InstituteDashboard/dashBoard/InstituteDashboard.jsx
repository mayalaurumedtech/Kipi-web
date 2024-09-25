import React, { useState } from 'react';
import FeesCollectionSection from '../FeesCollectionSection.jsx';
import Buttons from '../../custom/Buttons.jsx';
import { Svg } from '../../../utils/constant/Svg.jsx';
import { Link } from 'react-router-dom';
import { IconsUrls } from '../../../utils/constant/Icons.jsx';
import QuickActionsArrowAnim from '../../custom/QuickActionsArrowAnim.jsx';
import styled from './styles/InstituteDashboard.module.css';
import CalendarComponent from './CalendarComponent.jsx';
import CarouselSlider from '../../custom/CarouselSlider.jsx';
import { ImageUrls } from '../../../utils/constant/Images.jsx';
import Announcements from './Announcements.jsx';
import LeaveRequests from './LeaveRequests.jsx';
import FeesCollectionChart from './FeesCollectionChart.jsx';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import Select from '../../custom/Select.jsx';


const QuickActions = [
  { id: 1, path: '#', name: "Attendance", boxStyle: `${styled.attendance}`, icons: IconsUrls.Attendance },
  { id: 2, path: '#', name: "Replace Teacher", boxStyle: `${styled.replaceTeacher}`, icons: IconsUrls.ReplaceTeacher },
  { id: 3, path: '#', name: "Reports", boxStyle: `${styled.reports}`, icons: IconsUrls.Reports },
  { id: 4, path: '#', name: "Exams & Results", boxStyle: `${styled.examsResults}`, icons: IconsUrls.ExamsResults },
  { id: 5, path: '#', name: "Fees Collection", boxStyle: `${styled.feesCollection}`, icons: IconsUrls.FeesCollection },
  { id: 6, path: '#', name: "General Time Table", boxStyle: `${styled.generalTimeTable}`, icons: IconsUrls.GeneralTimeTable },
];

const CarouselImages = [
  { src: ImageUrls.Slide01 },
  { src: ImageUrls.Slide01 },
  { src: ImageUrls.Slide01 },
];

const announcements = [
  {
    icon: IconsUrls.speaker,
    heading: 'New update will release soon...',
    description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document...',
    date: '15 Dec 2024',
  },
  {
    icon: IconsUrls.speaker,
    heading: 'New update will release soon...',
    description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document...',
    date: '15 Dec 2024',
  },
  {
    icon: IconsUrls.speaker,
    heading: 'New update will release soon...',
    description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document...',
    date: '15 Dec 2024',
  },

];

const leaveRequests = [
  {
    icon: ImageUrls.Request02,
    name: 'Ritika Raval',
    heading: 'Mathematics Teacher',
    leavedate: '10-12 May',
    applydate: '1 May',
    type: 'Sick',
    Sick: true

  },
  {
    icon: ImageUrls.Request01,
    name: 'Pritesh Singh',
    heading: 'Mathematics Teacher',
    leavedate: '10-12 May',
    applydate: '1 May',
    type: 'Emergency',
    Emergency: true
  },
  {
    icon: ImageUrls.Request02,
    name: 'Ritika Raval',
    heading: 'Mathematics Teacher',
    leavedate: '10-12 May',
    applydate: '1 May',
    type: 'Sick',
    Sick: true
  },
  {
    icon: ImageUrls.Request01,
    name: 'Pritesh Singh',
    heading: 'Mathematics Teacher',
    leavedate: '10-12 May',
    applydate: '1 May',
    type: 'Emergency',
    Emergency: true
  },
];

const TodoOptions = [
  { value: 'All', label: 'All' },
  { value: 'Today', label: 'Today' },
  { value: 'Yesterday', label: 'Yesterday' },
  { value: 'This Week', label: 'This Week' },
];

const InstituteDashboard = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');

  const addTodo = (text) => {
    const newTodo = { text, completed: false, date: new Date() };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Filter todos based on the selected filter
  const filteredTodos = () => {
    const now = new Date();
    return todos.filter((todo) => {
      const todoDate = new Date(todo.date);
      const diffTime = Math.abs(now - todoDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      switch (filter) {
        case 'Today':
          return diffDays === 1;
        case 'Yesterday':
          return diffDays === 0;
        case 'This Week':
          return todoDate >= new Date(now.setDate(now.getDate() - 7));
        default:
          return true;
      }
    });
  };
  return (
    <>
      <div className="flex justify-between pt-6">
        <div>
          <h2 className="heading">Admin Dashboard</h2>
          <ul className="flex gap-1 paragraph text-secondaryGrey01">
            <li><Link to="/institute-landing-dashboard">Home</Link></li>
            <li>/</li>
            <li className="text-primaryBlack font-normal">Dashboard</li>
          </ul>

        </div>
        <Buttons path="/institute-registration" svg={Svg.PluseSvg} text="Add New Institute" buttonStyle="cusbuttons" alt="Add New Institute" />

      </div>

      {/* Fees Collection Section */}
      <FeesCollectionSection />

      <div className="pt-6">
        <h3 className="paragraph font-medium">Quick Actions</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {QuickActions.map((action, index) => (
            <QuickActionsArrowAnim
              action={action}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-6">
        <div className={`col-span-1 ${styled.roundedBorder}`}>
          <CalendarComponent />
        </div>
        <div className="col-span-2">
          <CarouselSlider images={CarouselImages} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
            {/* Announcements */}

            <Announcements
              title="Announcements"
              viewAllText="View all"
              items={announcements}
            />

            {/* Leave Requests */}

            <LeaveRequests
              title="Leave Requests"
              viewAllText="View all"
              items={leaveRequests}
              Sick={true}
            />

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`col-span-2 ${styled.roundedBorder} py-5 px-6`}>
          <FeesCollectionChart />
        </div>
        <div className={`col-span-1 ${styled.roundedBorder} pt-5 px-6`}>
          <div className="flex justify-between items-center">
            <h1 className="paragraph font-semibold">Todo App</h1>
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mb-4"
            >
              {TodoOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>

          <TodoForm addTodo={addTodo} />


          <TodoList todos={filteredTodos()} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
        </div>
      </div>
    </>
  )
}

export default InstituteDashboard