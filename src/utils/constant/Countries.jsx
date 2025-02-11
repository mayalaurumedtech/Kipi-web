const Countries = {
    'IN': [ // India
        { value: 'AP', label: 'Andhra Pradesh' },
        { value: 'AR', label: 'Arunachal Pradesh' },
        { value: 'AS', label: 'Assam' },
        { value: 'BR', label: 'Bihar' },
        { value: 'CG', label: 'Chhattisgarh' },
        { value: 'GA', label: 'Goa' },
        { value: 'GJ', label: 'Gujarat' },
        { value: 'HR', label: 'Haryana' },
        { value: 'HP', label: 'Himachal Pradesh' },
        { value: 'JH', label: 'Jharkhand' },
        { value: 'KA', label: 'Karnataka' },
        { value: 'KL', label: 'Kerala' },
        { value: 'MP', label: 'Madhya Pradesh' },
        { value: 'MH', label: 'Maharashtra' },
        { value: 'MN', label: 'Manipur' },
        { value: 'ML', label: 'Meghalaya' },
        { value: 'MZ', label: 'Mizoram' },
        { value: 'NL', label: 'Nagaland' },
        { value: 'OD', label: 'Odisha' },
        { value: 'PB', label: 'Punjab' },
        { value: 'RJ', label: 'Rajasthan' },
        { value: 'SK', label: 'Sikkim' },
        { value: 'TN', label: 'Tamil Nadu' },
        { value: 'TS', label: 'Telangana' },
        { value: 'TR', label: 'Tripura' },
        { value: 'UP', label: 'Uttar Pradesh' },
        { value: 'UT', label: 'Uttarakhand' },
        { value: 'WB', label: 'West Bengal' }
    ],
    'US': [ // United States
        { value: 'AL', label: 'Alabama' },
        { value: 'AK', label: 'Alaska' },
        { value: 'AZ', label: 'Arizona' },
        { value: 'AR', label: 'Arkansas' },
        { value: 'CA', label: 'California' },
        { value: 'CO', label: 'Colorado' },
        { value: 'CT', label: 'Connecticut' },
        { value: 'DE', label: 'Delaware' },
        { value: 'FL', label: 'Florida' },
        { value: 'GA', label: 'Georgia' },
        { value: 'HI', label: 'Hawaii' },
        { value: 'ID', label: 'Idaho' },
        { value: 'IL', label: 'Illinois' },
        { value: 'IN', label: 'Indiana' },
        { value: 'IA', label: 'Iowa' },
        { value: 'KS', label: 'Kansas' },
        { value: 'KY', label: 'Kentucky' },
        { value: 'LA', label: 'Louisiana' },
        { value: 'ME', label: 'Maine' },
        { value: 'MD', label: 'Maryland' },
        { value: 'MA', label: 'Massachusetts' },
        { value: 'MI', label: 'Michigan' },
        { value: 'MN', label: 'Minnesota' },
        { value: 'MS', label: 'Mississippi' },
        { value: 'MO', label: 'Missouri' },
        { value: 'MT', label: 'Montana' },
        { value: 'NE', label: 'Nebraska' },
        { value: 'NV', label: 'Nevada' },
        { value: 'NH', label: 'New Hampshire' },
        { value: 'NJ', label: 'New Jersey' },
        { value: 'NM', label: 'New Mexico' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'ND', label: 'North Dakota' },
        { value: 'OH', label: 'Ohio' },
        { value: 'OK', label: 'Oklahoma' },
        { value: 'OR', label: 'Oregon' },
        { value: 'PA', label: 'Pennsylvania' },
        { value: 'RI', label: 'Rhode Island' },
        { value: 'SC', label: 'South Carolina' },
        { value: 'SD', label: 'South Dakota' },
        { value: 'TN', label: 'Tennessee' },
        { value: 'TX', label: 'Texas' },
        { value: 'UT', label: 'Utah' },
        { value: 'VT', label: 'Vermont' },
        { value: 'VA', label: 'Virginia' },
        { value: 'WA', label: 'Washington' },
        { value: 'WV', label: 'West Virginia' },
        { value: 'WI', label: 'Wisconsin' },
        { value: 'WY', label: 'Wyoming' }
    ],
    'CA': [ // Canada
        { value: 'AB', label: 'Alberta' },
        { value: 'BC', label: 'British Columbia' },
        { value: 'MB', label: 'Manitoba' },
        { value: 'NB', label: 'New Brunswick' },
        { value: 'NL', label: 'Newfoundland and Labrador' },
        { value: 'NS', label: 'Nova Scotia' },
        { value: 'ON', label: 'Ontario' },
        { value: 'PE', label: 'Prince Edward Island' },
        { value: 'QC', label: 'Quebec' },
        { value: 'SK', label: 'Saskatchewan' },
        { value: 'NT', label: 'Northwest Territories' },
        { value: 'NU', label: 'Nunavut' },
        { value: 'YT', label: 'Yukon' }
    ],
    'AU': [ // Australia
        { value: 'ACT', label: 'Australian Capital Territory' },
        { value: 'NSW', label: 'New South Wales' },
        { value: 'NT', label: 'Northern Territory' },
        { value: 'QLD', label: 'Queensland' },
        { value: 'SA', label: 'South Australia' },
        { value: 'TAS', label: 'Tasmania' },
        { value: 'VIC', label: 'Victoria' },
        { value: 'WA', label: 'Western Australia' }
    ],
    'GB': [ // United Kingdom
        { value: 'ENG', label: 'England' },
        { value: 'SCT', label: 'Scotland' },
        { value: 'WAL', label: 'Wales' },
        { value: 'NIR', label: 'Northern Ireland' }
    ],
    'DE': [ // Germany
        { value: 'BW', label: 'Baden-Württemberg' },
        { value: 'BY', label: 'Bavaria' },
        { value: 'BE', label: 'Berlin' },
        { value: 'BB', label: 'Brandenburg' },
        { value: 'HB', label: 'Bremen' },
        { value: 'HH', label: 'Hamburg' },
        { value: 'HE', label: 'Hesse' },
        { value: 'MV', label: 'Mecklenburg-Vorpommern' },
        { value: 'NI', label: 'Lower Saxony' },
        { value: 'NW', label: 'North Rhine-Westphalia' },
        { value: 'RP', label: 'Rhineland-Palatinate' },
        { value: 'SL', label: 'Saarland' },
        { value: 'SN', label: 'Saxony' },
        { value: 'ST', label: 'Saxony-Anhalt' },
        { value: 'SH', label: 'Schleswig-Holstein' },
        { value: 'TH', label: 'Thuringia' }
    ],
    'FR': [ // France
        { value: 'AUV', label: 'Auvergne-Rhône-Alpes' },
        { value: 'BFC', label: 'Bourgogne-Franche-Comté' },
        { value: 'BRE', label: 'Brittany' },
        { value: 'CAD', label: 'Centre-Val de Loire' },
        { value: 'COR', label: 'Corsica' },
        { value: 'GES', label: 'Grand Est' },
        { value: 'HDF', label: 'Hauts-de-France' },
        { value: 'IDF', label: 'Île-de-France' },
        { value: 'NOR', label: 'Normandy' },
        { value: 'NAQ', label: 'Nouvelle-Aquitaine' },
        { value: 'OCC', label: 'Occitanie' },
        { value: 'PAC', label: 'Provence-Alpes-Côte d\'Azur' },
        { value: 'PDE', label: 'Pays de la Loire' }
    ],
    'JP': [ // Japan
        { value: '01', label: 'Hokkaido' },
        { value: '02', label: 'Aomori' },
        { value: '03', label: 'Iwate' },
        { value: '04', label: 'Miyagi' },
        { value: '05', label: 'Akita' },
        { value: '06', label: 'Yamagata' },
        { value: '07', label: 'Fukushima' },
        { value: '08', label: 'Ibaraki' },
        { value: '09', label: 'Tochigi' },
        { value: '10', label: 'Gunma' },
        { value: '11', label: 'Saitama' },
        { value: '12', label: 'Chiba' },
        { value: '13', label: 'Tokyo' },
        { value: '14', label: 'Kanagawa' },
        { value: '15', label: 'Niigata' },
        { value: '16', label: 'Toyama' },
        { value: '17', label: 'Ishikawa' },
        { value: '18', label: 'Fukui' },
        { value: '19', label: 'Yamanashi' },
        { value: '20', label: 'Nagano' },
        { value: '21', label: 'Gifu' },
        { value: '22', label: 'Shizuoka' },
        { value: '23', label: 'Aichi' },
        { value: '24', label: 'Mie' },
        { value: '25', label: 'Shiga' },
        { value: '26', label: 'Kyoto' },
        { value: '27', label: 'Osaka' },
        { value: '28', label: 'Hyogo' },
        { value: '29', label: 'Nara' },
        { value: '30', label: 'Wakayama' },
        { value: '31', label: 'Tottori' },
        { value: '32', label: 'Shimane' },
        { value: '33', label: 'Okayama' },
        { value: '34', label: 'Hiroshima' },
        { value: '35', label: 'Yamaguchi' },
        { value: '36', label: 'Tokushima' },
        { value: '37', label: 'Kagawa' },
        { value: '38', label: 'Ehime' },
        { value: '39', label: 'Kochi' },
        { value: '40', label: 'Fukuoka' },
        { value: '41', label: 'Saga' },
        { value: '42', label: 'Nagasaki' },
        { value: '43', label: 'Kumamoto' },
        { value: '44', label: 'Oita' },
        { value: '45', label: 'Miyazaki' },
        { value: '46', label: 'Kagoshima' },
        { value: '47', label: 'Okinawa' }
    ],
    'CN': [ // China
        { value: 'BJ', label: 'Beijing' },
        { value: 'TJ', label: 'Tianjin' },
        { value: 'HE', label: 'Hebei' },
        { value: 'SX', label: 'Shanxi' },
        { value: 'NM', label: 'Nei Mongol' },
        { value: 'LN', label: 'Liaoning' },
        { value: 'JS', label: 'Jiangsu' },
        { value: 'ZJ', label: 'Zhejiang' },
        { value: 'AH', label: 'Anhui' },
        { value: 'FJ', label: 'Fujian' },
        { value: 'JX', label: 'Jiangxi' },
        { value: 'SD', label: 'Shandong' },
        { value: 'HA', label: 'Henan' },
        { value: 'HB', label: 'Hubei' },
        { value: 'HN', label: 'Hunan' },
        { value: 'GD', label: 'Guangdong' },
        { value: 'GX', label: 'Guangxi' },
        { value: 'HI', label: 'Hainan' },
        { value: 'CQ', label: 'Chongqing' },
        { value: 'SC', label: 'Sichuan' },
        { value: 'GY', label: 'Guizhou' },
        { value: 'YN', label: 'Yunnan' },
        { value: 'XZ', label: 'Xizang' },
        { value: 'SHA', label: 'Shanghai' },
        { value: 'HUB', label: 'Hubei' },
        { value: 'HUN', label: 'Hunan' },
        { value: 'JIL', label: 'Jilin' },
        { value: 'HEB', label: 'Hebei' }
    ],
};

export default Countries;
