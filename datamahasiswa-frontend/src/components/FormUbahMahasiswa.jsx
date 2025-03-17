import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormUbahMahasiswa = () => {
    const { id_mahasiswa } = useParams(); // Get the ID from the route
    const [namaMahasiswa, setNamaMahasiswa] = useState("");
    const [emailMahasiswa, setEmailMahasiswa] = useState("");
    const [nimMahasiswa, setNimMahasiswa] = useState("");
    const [jurusan, setJurusan] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getMahasiswa = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/mahasiswa/detailMahasiswa/${id_mahasiswa}`);
            const { nama_mahasiswa, email_mahasiswa, NIM_mahasiswa, jurusan } = response.data.data;
            setNamaMahasiswa(nama_mahasiswa);
            setEmailMahasiswa(email_mahasiswa);
            setNimMahasiswa(NIM_mahasiswa);
            setJurusan(jurusan);
        };

        getMahasiswa();
    }, [id_mahasiswa]);

    const updateMahasiswa = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/mahasiswa/updateMahasiswa/${id_mahasiswa}`, {
                nama_mahasiswa: namaMahasiswa,
                email_mahasiswa: emailMahasiswa,
                NIM_mahasiswa: nimMahasiswa,
                jurusan: jurusan
            });
            alert("Mahasiswa updated successfully!");
            navigate('/');
        } catch (error) {
            console.error("Error updating mahasiswa:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Edit Mahasiswa</h1>
            <form onSubmit={updateMahasiswa}>
                <div className="mb-3">
                    <label htmlFor="nama_mahasiswa" className="form-label">Nama Mahasiswa</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nama_mahasiswa"
                        value={namaMahasiswa}
                        onChange={(e) => setNamaMahasiswa(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email_mahasiswa" className="form-label">Email Mahasiswa</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email_mahasiswa"
                        value={emailMahasiswa}
                        onChange={(e) => setEmailMahasiswa(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="NIM_mahasiswa" className="form-label">NIM Mahasiswa</label>
                    <input
                        type="text"
                        className="form-control"
                        id="NIM_mahasiswa"
                        value={nimMahasiswa}
                        onChange={(e) => setNimMahasiswa(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="jurusan" className="form-label">Jurusan</label>
                    <input
                        type="text"
                        className="form-control"
                        id="jurusan"
                        value={jurusan}
                        onChange={(e) => setJurusan(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default FormUbahMahasiswa;
