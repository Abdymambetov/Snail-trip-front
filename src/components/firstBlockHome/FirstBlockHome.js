import React, { useState } from 'react'
import classes from './FirstBlockHome.module.css';
import searchImg from '../../images/firstBlockImg/search.svg'

import coordinates from '../../images/firstBlockImg/coordinates (2).svg';
import CardModalPage from '../../pages/cardModalPage/CardModalPage';
import { useDispatch } from 'react-redux';
import { openCardModal, openModal } from '../../store/slices/authSlice';

function FirstBlockHome() {
  const dispatch = useDispatch()
  const openAuth = () => {
    dispatch(openCardModal())
  }
  const [activeInput, setActiveInput] = useState(null);
  return (
    <div className={classes.home}>
        <div className={classes.container}>
            <div className={classes.home_content_inner}>
                <div className={classes.two_text_home}>
                    <h1 className={classes.first_text}>Путешествуйте с нами в любой уголок Кыргызстана</h1>
                    <h2 className={classes.second_text}>Легкий способ найти приключения</h2>
                </div>
                <div className={classes.search_form}>
                  <form className={classes.form_inputs}>
                    <div className={classes.parent_input_where}>
                    {activeInput === 1 && <label for="inputs_from_where" className={classes.label_input_where}>Укажите место назначения</label>}
                      <input type="text" placeholder='Куда' className={classes.inputs_from_where}  onFocus={() => setActiveInput(1)}
                       onBlur={() => setActiveInput(null)}/>
                      <img src={searchImg} alt="searchImg" className={classes.search_image} />
                      <img src={coordinates} alt="coordinates"  className={classes.coordiante_image}/>
                    </div>
                    <div className={classes.parent_input_duration}>
                        {activeInput === 2 &&  <label for="inputs_from_duration" className={classes.label_input_duration}>Укажите кол-во дней</label>}
                        <input type="text" placeholder='Длительность' className={classes.inputs_from_duration} onFocus={() => setActiveInput(2)}
                          onBlur={() => setActiveInput(null)}/>
                    </div>
                    <div className={classes.parent_input_price}>
                      {activeInput === 3 && <label for="inputs_from_price" className={classes.label_input_price}>Укажите ценовую категорию</label>}
                      <input type="text" placeholder='Цена' className={classes.inputs_from_price} onFocus={() => setActiveInput(3)}
                       onBlur={() => setActiveInput(null)}/>
                    </div>
                    <div className={classes.parent_input_date}>
                    {activeInput === 4 && <label for="inputs_from_date" className={classes.label_input_date}>Выберите предпочтительную дату</label>}
                      <input type="date"  className={classes.inputs_from_date} onFocus={() => setActiveInput(4)}
                       onBlur={() => setActiveInput(null)}/>
                    </div>
                    <button className={classes.form_btn}>Найти туры</button>
                  </form>
                </div>
            </div>
        </div>
        <button onClick={openAuth}>hello</button>
        <CardModalPage/>
    </div>
  )
}

export default FirstBlockHome