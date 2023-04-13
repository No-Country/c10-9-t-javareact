import React, { useState, useEffect } from 'react'

function DateOfBirthInput ({ formData, onFormDataChange }) {
  // Initialize state for day, month, and year
  const [day, setDay] = useState(formData?.day || '')
  const [month, setMonth] = useState(formData?.month || '')
  const [year, setYear] = useState(formData?.year || '')

  // Define options for day, month, and year dropdowns
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const months = [
    { value: 1, label: 'Enero' },
    { value: 2, label: 'Febrero' },
    { value: 3, label: 'Marzo' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Mayo' },
    { value: 6, label: 'Junio' },
    { value: 7, label: 'Julio' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Septiembre' },
    { value: 10, label: 'Octubre' },
    { value: 11, label: 'Noviembre' },
    { value: 12, label: 'Diciembre' }
  ]
  const years = Array.from({ length: 100 }, (_, i) => 2008 - i)

  // Handle changes to day, month, and year dropdowns
  const handleDayChange = (event) => {
    setDay(event.target.value)
  }
  const handleMonthChange = (event) => {
    setMonth(event.target.value)
  }
  const handleYearChange = (event) => {
    setYear(event.target.value)
  }

  // Update parent form data when component state changes
  useEffect(() => {
    onFormDataChange({ ...formData, day, month, year })
  }, [day, month, year])

  return (
    <>
      <h1>Fecha de nacimiento</h1>
      <select
        id='day'
        value={day}
        onChange={handleDayChange}
        required
      >
        <option value='' disabled hidden>
          Dia
        </option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select
        id='month'
        value={month}
        onChange={handleMonthChange}
        required
      >
        <option value='' disabled hidden>
          Mes
        </option>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>
      <select
        id='year'
        value={year}
        onChange={handleYearChange}
        required
      >
        <option value='' disabled hidden>
          Año
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  )
}

export default DateOfBirthInput
