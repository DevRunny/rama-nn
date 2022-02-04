import React, { useState, useEffect } from "react";
import person from "../images/icons/person.svg";

export const SendForm = () => {
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [gosNumber, setGosNumber] = useState("");
  const [vin, setVin] = useState("");
  const [date, setDate] = useState("");
  const [checkbox, setCheckbox] = useState("");

  const [fioDirty, setFioDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [modelDirty, setModelDirty] = useState(false);
  const [gosNumberDirty, setGosNumberDirty] = useState(false);
  const [vinDirty, setVinDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);

  const [fioError, setFioError] = useState("Заполните ФИО");
  const [phoneError, setPhoneError] = useState("Заполните номер телефона");
  const [modelError, setModelError] = useState("Заполните марку и модель ТС");
  const [gosNumberError, setGosNumberError] = useState(
    "Заполните регистрационный знак"
  );
  const [vinError, setVinError] = useState("Заполните VIN номер ТС");
  const [dateError, setDateError] = useState("Укажите дату");
  const [checkboxError, setCheckboxError] = useState(
    "Необходимо согласиться с условиями"
  );

  const [formValid, setFormValid] = useState(false);
  const [submitValue, setSubmitValue] = useState("");

  const [fioValid, setFioValid] = useState("");
  const [phoneValid, setPhoneValid] = useState("");
  const [modelValid, setModelValid] = useState("");
  const [gosNumberValid, setGosNumberValid] = useState("");
  const [vinValid, setVinValid] = useState("");
  const [dateValid, setDateValid] = useState("");

  let classInput = "send-form__input";
  let classValidInput = " valid";

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
      setSubmitValue(
        "Вы не заполнили все обязательные поля выше. Вы сможете отправить заявку после заполнения."
      );
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
      /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
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
          src={person}
          alt="person"
          style={{ width: "32px", height: "32px" }}
        />
        <h1>Заявка на прохождение ТО</h1>
      </div>
      <hr />
      <form>
        <label>ФИО Владельца ТС:</label>
        {fioDirty && fioError && (
          <div className="send-form__error">{fioError}</div>
        )}
        <input
          onChange={(e) => fioHandler(e)}
          value={fio}
          onBlur={(e) => blurHandler(e)}
          className={classInput + fioValid}
          name="fio"
          type="text"
          placeholder="Иванов Иван Иванович"
          required
        />

        <label>Номер телефона для связи:</label>
        {phoneDirty && phoneError && (
          <div className="send-form__error">{phoneError}</div>
        )}
        <input
          onChange={(e) => phoneHandler(e)}
          value={phone}
          onBlur={(e) => blurHandler(e)}
          className={classInput + phoneValid}
          name="phone"
          type="text"
          placeholder="+7 (000) 000-00-00"
          required
        />

        <label>Марка и модель ТС:</label>
        {modelDirty && modelError && (
          <div className="send-form__error">{modelError}</div>
        )}
        <input
          onChange={(e) => modelHandler(e)}
          value={model}
          onBlur={(e) => blurHandler(e)}
          className={classInput + modelValid}
          name="model"
          type="text"
          placeholder="Chevrolet Niva"
          required
        />

        <label>Государственный регистрационный знак:</label>
        {gosNumberDirty && gosNumberError && (
          <div className="send-form__error">{gosNumberError}</div>
        )}
        <input
          onChange={(e) => gosNumberHandler(e)}
          value={gosNumber}
          onBlur={(e) => blurHandler(e)}
          className={classInput + gosNumberValid}
          name="gosnumber"
          type="text"
          placeholder="А 111 АА | 777"
          required
        />

        <label>VIN номер ТС:</label>
        {vinDirty && vinError && (
          <div className="send-form__error">{vinError}</div>
        )}
        <input
          onChange={(e) => vinHandler(e)}
          value={vin}
          onBlur={(e) => blurHandler(e)}
          className={classInput + vinValid}
          name="vin"
          type="text"
          placeholder="XTA123456Y1234567"
          required
        />

        <label>Дата и время прохождения ТО:</label>
        {dateDirty && dateError && (
          <div className="send-form__error">{dateError}</div>
        )}
        <input
          onChange={(e) => dateHandler(e)}
          value={date}
          onBlur={(e) => blurHandler(e)}
          className={classInput + dateValid}
          name="date"
          type="datetime-local"
          required
        />

        <label>
          Дополнительная информация:<p> (не обязательно)</p>
        </label>
        <input
          className={classInput}
          name="comment"
          type="text"
          placeholder="Ваш комментарий"
        />
        {<div className="send-form__error">{checkboxError}</div>}
        <label className="send-form__checkbox-label">
          <input
            onChange={(e) => checkboxHandler(e)}
            value={checkbox}
            className="send-form__checkbox"
            type="checkbox"
            required
          />
          Я соглашаюсь на обработу персональных данных
        </label>

        <input
          className="send-form__submit"
          type="submit"
          disabled={!formValid}
          value={submitValue}
        />
      </form>
      <hr />
    </div>
  );
};
