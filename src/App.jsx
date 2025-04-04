import { useState, useMemo, useRef, useEffect } from "react"

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";


function App() {

  const nameRef = useRef()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const specializationRef = useRef()
  const yearsExperienceRef = useRef()
  const [description, setDescription] = useState("")

  const isUsernameValid = useMemo(() => {
    const validChars = username.split("").every(c => letters.includes(c.toLowerCase()) || numbers.includes(c))
    return validChars && username.trim().length >= 6
  }, [username])

  const isPasswordValid = useMemo(() => {
    const hasLetter = password.split("").some(p => letters.includes(p))
    const hasNumber = password.split("").some(p => numbers.includes(p))
    const hasSymbol = password.split("").some(p => symbols.includes(p))
    return hasLetter && hasNumber && hasSymbol && password.trim().length >= 8
  }, [password])

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length <= 1000
  }, [description])

  function submitForm(e) {
    e.preventDefault()

    const name = nameRef.current.value
    const specialization = specializationRef.current.value
    const yearsExperience = yearsExperienceRef.current.value

    if (
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !yearsExperience.trim() ||
      yearsExperience <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      console.log("Compilare TUTTI i campi correttamente")
      alert("Compilare TUTTI i campi correttamente")
    } else {
      console.log("Dati inviati:", {
        name,
        username,
        password,
        specialization,
        yearsExperience,
        description,
      })
    }
  }

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  function resetForm(e) {
    e.preventDefault()

    nameRef.current.value = ""
    setUsername("")
    setPassword("")
    specializationRef.current.value = ""
    yearsExperienceRef.current.value = ""
    setDescription("")

    nameRef.current.focus()
  }


  return (
    <>
      <main>
        <div className="container">
          <form onSubmit={submitForm}>
            <div className="form-control">
              <label htmlFor="name">Nome completo</label>
              <input id="name" type="text" ref={nameRef} />
            </div>
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" value={username} onChange={e => { setUsername(e.target.value) }} />
              {username.trim() && (<p style={{ color: isUsernameValid ? "green" : "red" }}>{isUsernameValid ? "Username valido" : "Almeno 6 Caratteri alfanumerici."}</p>)}
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" value={password} onChange={e => { setPassword(e.target.value) }} />
              {password.trim() && (<p style={{ color: isPasswordValid ? "green" : "red" }}>{isPasswordValid ? "Password valida" : "Almeno 8 Caratteri, 1 lettera, 1 numero, 1 simbolo."}</p>)}
            </div>
            <div className="form-control">
              <label htmlFor="specialization">Specializzazione</label>
              <select id="specialization" ref={specializationRef}>
                <option value="">-</option>
                <option value="fullstack">Full Stack</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="years-experience">Anni di esperienza</label>
              <input id="years-experience" type="number" ref={yearsExperienceRef} />
            </div>
            <div className="form-control">
              <label htmlFor="description">Breve descrizione</label>
              <textarea id="description" value={description} onChange={e => { setDescription(e.target.value) }} />
              {description.trim() && (<p style={{ color: isDescriptionValid ? "green" : "red" }}>{isDescriptionValid ? "Descrizione valida" : `Tra 100 e 1000 caratteri", (${description.length})`}</p>)}
            </div>
            <button type="submit">Invio</button>
            <button onClick={resetForm}>Reset</button>
          </form>
        </div>

      </main>

      <footer style={{ height: "100vh" }}></footer>
      <button className="btn-scroll-top" onClick={() => {
        nameRef.current.scrollIntoView({ behavior: "smooth" })
      }}>Torna su</button>
    </>
  )
}

export default App