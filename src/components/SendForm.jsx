import React, { useEffect, useState } from "react";
import person from "../images/icons/person.svg";

export const SendForm = () => {
  const [ fio, setFio ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ model, setModel ] = useState("");
  const [ gosNumber, setGosNumber ] = useState("");
  const [ vin, setVin ] = useState("");
  const [ date, setDate ] = useState("");
  const [ checkbox, setCheckbox ] = useState("");

  const [ fioDirty, setFioDirty ] = useState(false);
  const [ phoneDirty, setPhoneDirty ] = useState(false);
  const [ modelDirty, setModelDirty ] = useState(false);
  const [ gosNumberDirty, setGosNumberDirty ] = useState(false);
  const [ vinDirty, setVinDirty ] = useState(false);
  const [ dateDirty, setDateDirty ] = useState(false);

  const [ fioError, setFioError ] = useState("Заполните ФИО");
  const [ phoneError, setPhoneError ] = useState("Заполните номер телефона");
  const [ modelError, setModelError ] = useState("Заполните марку и модель ТС");
  const [ gosNumberError, setGosNumberError ] = useState(
    "Заполните регистрационный знак"
  );
  const [ vinError, setVinError ] = useState("Заполните VIN номер ТС");
  const [ dateError, setDateError ] = useState("Укажите дату");
  const [ checkboxError, setCheckboxError ] = useState(
    "Необходимо согласиться с условиями"
  );

  const [ formValid, setFormValid ] = useState(false);
  const [ submitValue, setSubmitValue ] = useState("");

  const [ fioValid, setFioValid ] = useState("");
  const [ phoneValid, setPhoneValid ] = useState("");
  const [ modelValid, setModelValid ] = useState("");
  const [ gosNumberValid, setGosNumberValid ] = useState("");
  const [ vinValid, setVinValid ] = useState("");
  const [ dateValid, setDateValid ] = useState("");

  const classInput = "send-form__input";
  const classInputError = "send-form__input-error";
  const classValidInput = " valid";
  const classError = "send-form__error";

  useEffect(() => {
    if (
      fioError ||
      phoneError ||
      modelError ||
      gosNumberError ||
      vinError ||
      dateError ||
      checkboxError
    ) {
      setFormValid(false);

      if (window.innerWidth > 375) {
        setSubmitValue(
          "Вы не заполнили все обязательные поля выше. Вы сможете отправить заявку после заполнения."
        );
      } else {
        setSubmitValue("Заполните все поля.");
      }
    } else {
      setFormValid(true);
      setSubmitValue("Отправить заявку");
    }
  }, [
    fioError,
    phoneError,
    modelError,
    gosNumberError,
    vinError,
    dateError,
    checkboxError,
  ]);

  const fioHandler = (e) => {
    setFio(e.target.value);
    const re =
      /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]+|[А-ЯA-Z][\x27а-яa-z]+-([А-ЯA-Z][\x27а-яa-z]+|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]+(\040[А-ЯA-Z][\x27а-яa-z]+)?$/;
    if (!re.test(e.target.value)) {
      setFioError("Некорректное имя");
      setFioValid("");
    } else {
      setFioError("");
      setFioValid(classValidInput);
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const re = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
    if (!re.test(e.target.value)) {
      setPhoneError("Некорректный нормер телефона");
      setPhoneValid("");
    } else {
      setPhoneError("");
      setPhoneValid(classValidInput);
    }
  };

  const modelHandler = (e) => {
    setModel(e.target.value);
    const re = /^[A-Za-zА-Яа-я0-9 ]+$/;
    if (!re.test(e.target.value)) {
      setModelError("Некорректно указана марка или модель ТС");
      setModelValid("");
    } else {
      setModelError("");
      setModelValid(classValidInput);
    }
  };

  const gosNumberHandler = (e) => {
    setGosNumber(e.target.value);
    if (e.target.value.length > 9) {
      setGosNumberError("Максимальное допустимое кол-во символов - 9");
      setGosNumberValid("");
    } else {
      setGosNumberError("");
      setGosNumberValid(classValidInput);
    }
  };

  const vinHandler = (e) => {
    setVin(e.target.value);
    if (e.target.value.length > 17) {
      setVinError("Максимальное допустимое кол-во символов - 17");
      setVinValid("");
    } else if (e.target.value.length < 17) {
      setVinError("Минимальное допустимое кол-во символов - 17");
      setVinValid("");
    } else {
      setVinError("");
      setVinValid(classValidInput);
    }
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
    if (e.target.value === "") {
      setDateError("Укажите дату");
      setDateValid("");
    } else {
      setDateError("");
      setDateValid(classValidInput);
    }
  };

  const checkboxHandler = (e) => {
    setCheckbox(e.target.checked);
    if (!e.target.checked) {
      setCheckboxError("Необходимо согласиться с условиями");
    } else {
      setCheckboxError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "fio":
        setFioDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "model":
        setModelDirty(true);
        break;
      case "vin":
        setVinDirty(true);
        break;
      case "gosnumber":
        setGosNumberDirty(true);
        break;
      case "date":
        setDateDirty(true);
        break;

      default:
    }
  };

  return (
    <div className="send-form">
      <div className="send-form__title">
        <img
          src={ person }
          alt="person"
          style={ { width: "32px", height: "32px" } }
        />
        <h1>Заявка на прохождение ТО</h1>
      </div>
      <hr />
      <form>
        <label className="send-form__field-name">ФИО Владельца ТС:
          { fioDirty && fioError && (
            <div className={ classError }>{ fioError }</div>
          ) }
        </label>
        <input
          onChange={ (e) => fioHandler(e) }
          value={ fio }
          onBlur={ (e) => blurHandler(e) }
          className={ fioDirty && fioError ? classInputError : classInput + fioValid }
          name="fio"
          type="text"
          placeholder="Иванов Иван Иванович"
          required
        />

        <label className="send-form__field-name">Номер телефона для связи:
          { phoneDirty && phoneError && (
            <div className={ classError }>{ phoneError }</div>
          ) }
        </label>
        <input
          onChange={ (e) => phoneHandler(e) }
          value={ phone }
          onBlur={ (e) => blurHandler(e) }
          className={ phoneDirty && phoneError ? classInputError : classInput + phoneValid }
          name="phone"
          type="text"
          placeholder="+7 (000) 000-00-00"
          required
        />

        <label className="send-form__field-name">Марка и модель ТС:
          { modelDirty && modelError && (
            <div className={ classError }>{ modelError }</div>
          ) }
        </label>
        <input
          onChange={ (e) => modelHandler(e) }
          value={ model }
          onBlur={ (e) => blurHandler(e) }
          className={ modelDirty && modelError ? classInputError : classInput + modelValid }
          name="model"
          type="text"
          placeholder="Chevrolet Niva"
          required
        />

        <label className="send-form__field-name">Государственный регистрационный знак:
          { gosNumberDirty && gosNumberError && (
            <div className={ classError }>{ gosNumberError }</div>
          ) }
        </label>
        <input
          onChange={ (e) => gosNumberHandler(e) }
          value={ gosNumber }
          onBlur={ (e) => blurHandler(e) }
          className={ gosNumberDirty && gosNumberError ? classInputError : classInput + gosNumberValid }
          name="gosnumber"
          type="text"
          placeholder="А 111 АА | 777"
          required
        />

        <label className="send-form__field-name">VIN номер ТС:
          { vinDirty && vinError && (
            <div className={ classError }>{ vinError }</div>
          ) }
        </label>
        <input
          onChange={ (e) => vinHandler(e) }
          value={ vin }
          onBlur={ (e) => blurHandler(e) }
          className={ vinDirty && vinError ? classInputError : classInput + vinValid }
          name="vin"
          type="text"
          placeholder="XTA123456Y1234567"
          required
        />

        <label className="send-form__field-name">Дата и время прохождения ТО:
          { dateDirty && dateError && (
            <div className={ classError }>{ dateError }</div>
          ) }
        </label>
        <input
          onChange={ (e) => dateHandler(e) }
          value={ date }
          onBlur={ (e) => blurHandler(e) }
          className={ dateDirty && dateError ? classInputError : classInput + dateValid }
          name="date"
          type="datetime-local"
          required
        />

        <label className="send-form__field-name">
          Дополнительная информация:<p> (не обязательно)</p>
        </label>
        <input
          className={ classInput }
          name="comment"
          type="text"
          placeholder="Ваш комментарий"
        />
        <label className="send-form__checkbox">
          <input
            onChange={ (e) => checkboxHandler(e) }
            value={ checkbox }
            className="send-form__checkbox"
            type="checkbox"
            required
          />
          Я соглашаюсь на обработку персональных данных
          { <div className={ classError }>{ checkboxError }</div> }
        </label>


        <input
          className="send-form__submit"
          type="submit"
          disabled={ !formValid }
          value={ submitValue }
        />
      </form>
      <hr />
    </div>
  );
};
