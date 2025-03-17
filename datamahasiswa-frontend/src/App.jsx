import FormTambahMahasiswa from "./components/FormTambahMahasiswa";
import MahasiswaList from "./components/MahasiswaList"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FormUbahMahasiswa from "./components/FormUbahMahasiswa";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MahasiswaList/>}></Route>
        <Route path="/tambahmahasiswa" element={<FormTambahMahasiswa/>}></Route>
        <Route path="/editmahasiswa/:id_mahasiswa" element={<FormUbahMahasiswa/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
