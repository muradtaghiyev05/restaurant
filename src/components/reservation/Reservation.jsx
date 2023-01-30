import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReserveImg from '../../assets/other-images/reservation.webp';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/az";

const Reservation = () => {

  const [values, setValues] = useState({
    name: '',
    number: '',
    person: '',
    date: dayjs(new Date()),
    time: dayjs('2023-01-01T09:00:00.000Z'),
    message: ''
  });

  const handleReservation = (e) => {
    e.preventDefault();

    const reservationText = `Salam, mən rezervasiya etmək istəyirəm.
      %0AAd: ${values.name}
      %0ANömrə: ${values.number}
      %0ASayımız: ${values.person === '' ? 1 : values.person}
      %0ATarix: ${values.date.$d.toLocaleDateString("en-GB") }
      %0ASaat: ${values.time.$d.toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' })}
      %0AQeyd: ${values.message ? values.message : 'yoxdur'}`;

    window.open(`https://wa.me/994553600600?text=${reservationText}`);
  };

  const { pathname, hash, key } = useLocation();
  useEffect(() => {
      if (hash === '') {
          window.scrollTo(0, 0);
      }
  }, [pathname, hash, key]);

  return (
    <div className="reserve-container">
      <div className='reserve-hero-container'>
        <img src={ReserveImg} alt='hero' />
        <div className="reserve-hero-info">
          <h2>Rahatlığınız üçün əvvəlcədən masanızı rezerv edin.</h2>
        </div>
      </div>
      <div className="reserve-form-container">
        <div className="reserve-form">
          <h1>Rezervasiya</h1>
          <form onSubmit={handleReservation}>
            <div className="form-input">
              <input 
                name="name"
                placeholder="Ad"
                required
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="form-input">
              <input
                name="number"
                placeholder="Nömrə"
                required
                value={values.number}
                onChange={(e) => setValues({ ...values, number: e.target.value })}
              />
              <select required value={values.person} onChange={(e) => setValues({ ...values, person: e.target.value })}>
                <option hidden value=''>Nəfər</option>
                {Array.from({ length: 8 }, (item, index) => item = index + 1).map(num => (
                  <option key={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="form-input">
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='az'>
                <MobileDatePicker
                  value={values.date}
                  onChange={(newValue) => {
                    setValues({ ...values, date: newValue });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <MobileTimePicker
                  value={values.time}
                  onChange={(newValue) => {
                    setValues({ ...values, time: newValue });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  minTime={dayjs('2023-01-01T09:00')}
                  maxTime={dayjs('2023-01-01T21:00')}
                />
              </LocalizationProvider>
            </div>
            <div className="form-input">
              <textarea
                name="message"
                placeholder="Əlavə qeydlər"
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
              />
            </div>
            <button className="reserve-btn">Göndər</button>
          </form>
        </div>
        <div className="reserve-info">
          <span className="reserve-info-title">İş Saatları</span>
          <span className="reserve-info-desc">1-6-cı günlər: 10:00 - 21:00</span>
          <span className="reserve-info-desc">7-ci gün: 11:00 - 19:00</span>
          <span className="reserve-info-title">Ünvan</span>
          <span className="reserve-info-desc">Bakı, Tarqovu</span>
          <span className="reserve-info-title">Əlaqə Nömrəsi</span>
          <span className="reserve-info-desc">055-999-99-99</span>
        </div>
      </div>
    </div>
  )
}

export default Reservation