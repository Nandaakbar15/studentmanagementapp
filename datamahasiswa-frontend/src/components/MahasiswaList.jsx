import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function MahasiswaList() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const getMahasiswa = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/mahasiswa/getMahasiswa');
    setMahasiswa(Object.values(response.data.data));
  }

  const deleteMahasiswa = async(id_mahasiswa) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/mahasiswa/deleteMahasiswa/${id_mahasiswa}`);
      getMahasiswa();
      alert('Mahasiswa deleted successfully!');
    } catch(error) {
      console.error("Error : ", error);
    }
  }

  useEffect(() => {
    getMahasiswa();
  }, []);

  return (
    <div className='container mt-5'>
      <h1>Data Mahasiswa</h1>

      <h2><Link to={'/tambahmahasiswa'} className="btn btn-primary">Tambah Mahasiswa</Link></h2>
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nama Mahasiswa</th>
          <th scope="col">Email Mahasiswa</th>
          <th scope="col">NIM Mahasiswa</th>
          <th scope="col">Jurusan</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {mahasiswa.map((data) => (
          <tr key={data.id_mahasiswa}>
          <td>{data.nama_mahasiswa}</td>  
          <td>{data.email_mahasiswa}</td>
          <td>{data.NIM_mahasiswa}</td>
          <td>{data.jurusan}</td>
          <td>
            <Link to={`editmahasiswa/${data.id_mahasiswa}`} className="btn btn-primary">Edit Mahasiswa</Link>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => deleteMahasiswa(data.id_mahasiswa)}>Hapus Mahasiswa</button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default MahasiswaList
