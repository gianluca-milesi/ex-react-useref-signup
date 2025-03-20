import { useState } from "react"



function App() {

  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [selectSpecialization, setSelectSpecialization] = useState("")
  const [yearsExperience, setYearsExperience] = useState("")
  const [description, setDescription] = useState("")

  function submitForm(e) {
    e.preventDefault()

    if (!name || !userName || !password || !selectSpecialization || !yearsExperience || !description) {
      console.log("Inserisci TUTTI i dati")
      return
    }

    const yearsToNumber = Number(yearsExperience)
    if (isNaN(yearsToNumber) || yearsToNumber <= 0) {
      console.log("Invalid Years of experience")
      return
    }


    console.log(`
        Name: ${name}
        Username: ${userName}
        Password: ${password}
        Specialization: ${selectSpecialization}
        Years of experience: ${yearsExperience}
        Description: ${description}`)
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
          <input id="username" type="text" value={userName} onChange={e => setUserName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
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
          <input id="years-experience" type="number" value={yearsExperience} onChange={e => setYearsExperience(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="description">Breve descrizione</label>
          <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button>Invio</button>
      </form>

    </main>
  )
}

export default App