import React, { createContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState({
    backgroundImage: 'linear-gradient(90deg, rgb(44, 53, 184), rgb(148, 33, 39))',
    color: 'white',
  });
  

  const [navdmode, setNavdmode] = useState({
    color: 'black',
    backgroundColor: 'rgb(146, 156, 248)',
  });

  const [Aboutdmode, setAboutdmode] = useState({
    color: 'black',
    backgroundColor: '#efe4f0',
    border: 'solid 2px black',
    borderRadius: '4px',
  });

  const [copybtnColor, setcopybtnColor] = useState()

  const toggleDarkMode = () => {
    if (darkMode.backgroundColor === 'white') {
      setDarkMode({
        backgroundColor: '#263c6d',
        color: 'white',
      });
      setAboutdmode({
        color: 'white',
        backgroundColor: 'black',
        border: 'solid 2px black',
        borderRadius: '4px',
      });
      setNavdmode({
        color: 'white',
        backgroundColor: '#58585a',
      });

    } 
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode, navdmode, Aboutdmode, toggleDarkMode, copybtnColor }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
