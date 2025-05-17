<h1 align="center" id="title">React Time Date Picker</h1>

<p id="description">A React component library providing elegant and intuitive iOS-style pickers for Gregorian dates times and Jalaali (Persian) dates offering a consistent user experience in your React applications.</p>

<h2>🧐 Features</h2>

Here're some of the project's best features:

- Time Picker
- Date Picker
- Jalaali Date Picker

<h2>🛠️ Installation Steps:</h2>

<p>1. Install</p>

```
npm install @moamfar/react-time-date-picker
```

<p>1. Install</p>
```
//import style.css to your code

import "@moamfar/react-time-date-picker/dist/style.css";

```

<h2>Time Picker Props</h2>

|         Prop         |                     Description                     | Required |                                               Default Value                                                |
| :------------------: | :-------------------------------------------------: | :------: | :--------------------------------------------------------------------------------------------------------: |
|     selectedTime     |            value of returned time object            |   true   |                                                 undefined                                                  |
|   setSelectedTime    | function for setting value of returned time object  |   true   |                                                 undefined                                                  |
|    submitCallback    | function that calls after clicking on submit button |  false   |                                                 undefined                                                  |
|     submitTitle      |               Title of submit button                |  false   |                                                   "ثبت"                                                    |
|   buttonClassName    |           Tailwind classNames for button            |  false   |                     "w-full bg-black rounded-md flex items-center justify-center h-10"                     |
| submitTitleClassName |        Tailwind classNames for button title         |  false   |                                                "text-white"                                                |
|  containerClassName  |          Tailwind classNames for container          |  false   | "flex px-[10%] md:px-[25%] flex-row items-center justify-center w-full h-[18rem] overflow-hidden relative" |

<h2>Date Picker Props</h2>

|         Prop         |                     Description                     | Required |                                               Default Value                                                |
| :------------------: | :-------------------------------------------------: | :------: | :--------------------------------------------------------------------------------------------------------: |
|     selectedDate     |            value of returned date object            |   true   |                                                 undefined                                                  |
|   setSelectedDate    | function for setting value of returned date object  |   true   |                                                 undefined                                                  |
|       maxYear        |                          -                          |   true   |                                                Current year                                                |
|       minYear        |                          -                          |   true   |                                               100 Years back                                               |
|    submitCallback    | function that calls after clicking on submit button |  false   |                                                 undefined                                                  |
|     submitTitle      |               Title of submit button                |  false   |                                                   "ثبت"                                                    |
|   buttonClassName    |           Tailwind classNames for button            |  false   |                     "w-full bg-black rounded-md flex items-center justify-center h-10"                     |
| submitTitleClassName |        Tailwind classNames for button title         |  false   |                                                "text-white"                                                |
|  containerClassName  |          Tailwind classNames for container          |  false   | "flex px-[10%] md:px-[25%] flex-row items-center justify-center w-full h-[18rem] overflow-hidden relative" |

<h2>💻 Built with</h2>

Technologies used in the project:

- TailwindCSS
- Embla
```
