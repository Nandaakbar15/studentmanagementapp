import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const FormTambahMahasiswa = () => {
    const[namaMahasiswa, setNamaMahasiswa] = useState("");
    const [emailMahasiswa, setEmailMahasiswa] = useState("");
    const [nimMahasiswa, setNimMahasiswa] = useState("");
    const [jurusan, setJurusan] = useState("");
    const navigate = useNavigate();

    const addMahasiswa = async(e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/mahasiswa/addMahasiswa", {
                nama_mahasiswa: namaMahasiswa,
                email_mahasiswa: emailMahasiswa,
                NIM_mahasiswa: nimMahasiswa,
                jurusan: jurusan
            });
            alert('New Mahasiswa added!');
            navigate('/');
        } catch(error) {
            console.error("Error : ", error);
        }
    }

  return (
    <div className="container mt-5">
      <h1>Form Tambah Mahasiswa</h1>
        <form onSubmit={addMahasiswa}>
            <div className="mb-3">
                <label htmlFor="nama_mahasiswa" className="form-label">Nama Mahasiswa</label>
                <input type="text" className="form-control" id="nama_mahasiswa" name="nama_mahasiswa" value={namaMahasiswa} onChange={(e) => setNamaMahasiswa(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email_mahasiswa" className="form-label">Email Mahasiswa</label>
                <input type="text" className="form-control" id="email_mahasiswa" name="email_mahasiswa" value={emailMahasiswa} onChange={(e) => setEmailMahasiswa(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="NIM_mahasiswa" className="form-label">NIM Mahasiswa</label>
                <input type="text" className="form-control" id="NIM_mahasiswa" name="NIM_mahasiswa" value={nimMahasiswa} onChange={(e) =>  setNimMahasiswa(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="jurusan" className="form-label">Jurusan</label>
                <input type="text" className="form-control" id="jurusan" name="jurusan" value={jurusan} onChange={(e) => setJurusan(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Tambah!</button>
        </form>
    </div>
  )
}

export default FormTambahMahasiswa
