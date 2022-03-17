
import './App.css';
import Header from './header/header';

import Questionform from './main/QuestionForm';
import { useState, useEffect } from 'react'
import Pastaitems from './item/pasta_items'
import Footer from './footer/Footer';
import { Outlet, Link } from "react-router-dom";

import { pastaList } from "./data/pastaLists"

import { useTheme } from './theme/useTheme';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import WebFont from 'webfontloader';
import { Aside } from "./aside/Aside"
function App() {
  const [activeCategory, setActiveCategory] = useState('')
  const categories = pastaList.reduce(
    (acc, pasta) =>
      acc.includes(pasta.category) ? acc : acc.concat(pasta.category),
    []
  )



  // const handleChange1 = () => {
  //   Setvalue('1');
  //   alert(value);
  // };

  // const handleChange2 = () => {
  //   Setvalue('2');
  //   alert(value);
  // };

  // const handleChange3 = () => {
  //   Setvalue('3');
  //   alert(value);
  // };


  const [checked, Setcheck] = useState(false)
  const [checked2, Setcheck2] = useState(false)
  const handleChange_checkbox = () => {

    Setcheck(!checked);

  };
  const handleChange_checkbox2 = () => {
    Setcheck2(!checked2);

  };


  const [value, Setvalue] = useState("")

  const handleChange1 = (e) => {
    Setvalue(e.target.value);

  };
  console.log("checked ==" + checked)
  console.log("checked2 ==" + checked2)

  var bool = 0;
  if (value === "5") {
    bool = 1;
  }
  else if (value === "9") {
    bool = 2;
  }
  else if (value === "10") {
    bool = 3
  }
  else if (value === "0") {
    bool = 4
  }




  if (checked === true && checked2 === false) {
    pastaList.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    })


  }
  else if (checked === false) {
    pastaList.sort(function (a, b) {
      return a.name.localeCompare(b.name);

    })
  }

  if (checked2 === true && checked === false) {
    pastaList.sort(function (a, b) {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      return 0;
    })
  }
  if (checked2 === true && checked === false) {
    pastaList.sort(function (a, b) {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    })
  }


  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);




  useEffect(() => { setSelectedTheme(theme) }, [themeLoaded],);// eslint-disable-line react-hooks/exhaustive-deps

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });


  return (

    <div className="App">
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />







        </ThemeProvider>
      }
      <Header />
      <main className="parent">
        {/* <div class="parent"></div> */}
        {
          themeLoaded && <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />







          </ThemeProvider>
        }
        <div className="div1">

          <Aside
            handleChange1={handleChange1}
            value={value}
            checked={checked}
            handleChange_checkbox={handleChange_checkbox}
            checked2={checked2}
            handleChange_checkbox2={handleChange_checkbox2}
          />
        </div>

        <div className="div2">

          <Outlet />
          <Questionform
            categories={categories}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory} />

        </div>
        <div className="div3">
          <ul className='pasta_list'>
            {pastaList.filter((val) => {





              if (bool === 1) {

                if (val.price < 5) {

                  return val
                }

              }
              else if (bool === 2) {
                if (val.price > 5 && val.price < 10) {

                  return val
                }
              }
              else if (bool === 3) {
                if (val.price >= 10) {

                  return val
                }
              }
              else if (bool === 4) {


                return val

              }


              else {

                if (activeCategory === "") {

                  return val

                }
                else if (val.name.toLowerCase().includes(activeCategory.toLowerCase())) {
                  return val


                  // } else if (val !== 0) {

                  //   // alert(value);
                  //   return val;
                  //
                }
                else {
                  return 0
                }
              }
              return 0



            }).map((val) => {








              return (
                <div className="items" key={val.id}>
                  <Pastaitems id={val.id}
                    cover={val.cover}
                    name={val.name}

                    price={val.price}
                    category={categories}
                  />

                </div>

              );
            })}




          </ul>
        </div>
        <div className="div4">
          <Footer />
        </div>
      </main>

    </div>
  );
}

export default App;

