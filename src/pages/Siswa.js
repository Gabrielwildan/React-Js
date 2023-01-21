import Listsiswa from "./Listsiswa";

function Siswa() {
    const nama = ['Yanto', 'Joni', 'Stephen']
    return (
        <div className="App">
            <Listsiswa judul={nama} />
        </div>
    );
}

export default Siswa;
