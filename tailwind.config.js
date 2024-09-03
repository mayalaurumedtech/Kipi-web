/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow01': '3px 3px 0px 0px',
        'custom-shadow02': '2px 2px 0px 0px',
        'hover-shadow01': '4px 4px 0px 0px',
      },
      fontFamily: {
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#3573F9',  
        primaryDarkBlue: '#000F5B',
        primaryBlack: '#000000',
        primaryWhite: '#FFFFFF',
        
        secondaryGrey01: '#343947',
        secondaryGrey02: '#869BB9',
        secondaryGrey03: '#F4F7FB',
        secondaryLightBlue02 : '#F4F7FF',

        territoryLightBlue01 : '#D0D7E9',
        territoryGreyOutline : '#E5E7EE',
        territoryRed : '#FB4646',
        territoryYellow : '#DA8D19',
        territoryGreen : '#439368',
        territoryLightGreen01 : '#C8EAD7',
        territoryLightGreen02 : '#FBFFFC',
        territoryLightYellow : '#FBF7F3',
        territoryYellowBG : '#FDFAF7',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {

          // box Shadow
          '--custom-shadow01': theme('boxShadow.custom-shadow01'),
          '--custom-shadow02': theme('boxShadow.custom-shadow02'),
          '--hover-shadow01': theme('boxShadow.hover-shadow01'),  


          // Font Family
          '--bricolage-font': theme('fontFamily.bricolage'),
          

          // Color 
          '--primary-blue': theme('colors.primaryBlue'),
          '--primary-dark-blue': theme('colors.primaryDarkBlue'),
          '--primary-black': theme('colors.primaryBlack'),
          '--primary-white': theme('colors.primaryWhite'),
          
          '--secondary-grey-01': theme('colors.secondaryGrey01'),
          '--secondary-grey-02': theme('colors.secondaryGrey02'),
          '--secondary-grey-03': theme('colors.secondaryGrey03'),
          '--secondary-light-blue-02': theme('colors.secondaryLightBlue02'),
          
          '--territory-light-blue-01': theme('colors.territoryLightBlue01'),
          '--territory-grey-outline': theme('colors.territoryGreyOutline'),
          '--territory-red': theme('colors.territoryRed'),
          '--territory-yellow': theme('colors.territoryYellow'),
          '--territory-green': theme('colors.territoryGreen'),
          '--territory-light-green-01': theme('colors.territoryLightGreen01'),
          '--territory-light-green-02': theme('colors.territoryLightGreen02'),
          '--territory-light-yellow': theme('colors.territoryLightYellow'),
          '--territory-yellow-bg': theme('colors.territoryYellowBG'), 
        },
      });
    },
  ],
}
