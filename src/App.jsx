import { useState } from "react"


function App() {

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [selectSpecialization, setSelectSpecialization] = useState("")
  const [yearsExperience, setYearsExperience] = useState("")
  const [description, setDescription] = useState("")

  //Messaggi di errore
  const [usernameMessage, setUsernameMessage] = useState("")
  const [passwordMessage, setPasswordMessage] = useState("")
  const [yearsExperienceMessage, setYearsExperienceMessage] = useState("")
  const [descriptionMessage, setDescriptionMessage] = useState("")

  function validateUsername(value) {
    setUsername(value)
    const usernameRegex = /^[a-zA-Z0-9]{6,}$/
    if (!usernameRegex.test(value)) {
      setUsernameMessage("Username non valido ✗")
      console.log("Invalid Username: must contain only alphanumeric characters and at least 6 characters (no spaces or symbols)")
    } else {
      setUsernameMessage("Username valido ✓")
    }
  }

  function validatePassword(value) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/
    if (!passwordRegex.test(value)) {
      setPasswordMessage("Password non valida ✗")
      console.log("Invalid Password: must contain at least 8 characters, 1 letter, 1 number and 1 symbol")
    } else {
      setPasswordMessage("Password valida ✓")
    }
  }

  function validateYears(value) {
    const yearsToNumber = Number(value)
    if (isNaN(yearsToNumber) || yearsToNumber <= 0) {
      setYearsExperienceMessage("Valore non valido ✗")
      console.log("Invalid Years of experience: must be a positive value")
    } else {
      setYearsExperienceMessage("✓")
    }
  }

  function validateDescription(value) {
    const descriptionTrim = value.trim()
    if (descriptionTrim.length < 100 || descriptionTrim.length > 1000) {
      setDescriptionMessage("Descrizione non valida ✗")
      console.log("Invalid Description: Must contain between 100 and 1000 characters (without leading and trailing spaces)")
    } else {
      setDescriptionMessage("✓")
    }
  }

  function submitForm(e) {
    e.preventDefault()

    if (!name || !username || !password || !selectSpecialization || !yearsExperience || !description) {
      console.log("Inserisci i dati in TUTTI i campi")
      return
    }

    console.log(`
        Name: ${name}
        Username: ${username}
        Password: ${password}
        Specialization: ${selectSpecialization}
        Years of experience: ${yearsExperience}
        Description: ${description}
        `)
  }


  return (
    <main>
      <form onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor="name">Nome completo</label>
          <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={username} onChange={e => { setUsername(e.target.value); validateUsername(e.target.value); }} />
          {usernameMessage && (<span style={{ color: usernameMessage.includes("✓") ? "green" : "red" }}>{usernameMessage}</span>)}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={e => { setPassword(e.target.value); validatePassword(e.target.value) }} />
          {passwordMessage && (<span style={{ color: passwordMessage.includes("✓") ? "green" : "red" }}>{passwordMessage}</span>)}
        </div>
        <div className="form-control">
          <label htmlFor="specialization">Specializzazione</label>
          <select id="specialization" value={selectSpecialization} onChange={e => setSelectSpecialization(e.target.value)}>
            <option value="">-</option>
            <option value="fullstack">Full Stack</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="years-experience">Anni di esperienza</label>
          <input id="years-experience" type="number" value={yearsExperience} onChange={e => { setYearsExperience(e.target.value); validateYears(e.target.value) }} />
          {yearsExperienceMessage && (<span style={{ color: yearsExperienceMessage.includes("✓") ? "green" : "red" }}>{yearsExperienceMessage}</span>)}
        </div>
        <div className="form-control">
          <label htmlFor="description">Breve descrizione</label>
          <textarea id="description" value={description} onChange={e => { setDescription(e.target.value); validateDescription(e.target.value) }} />
          {descriptionMessage && (<span style={{ color: descriptionMessage.includes("✓") ? "green" : "red" }}>{descriptionMessage}</span>)}
        </div>
        <button>Invio</button>
      </form>

    </main>
  )
}

export default App