function Tabel(props) {
    const menus = props.menu;
    const title = props.title;
    return (
        <div className="App">
            <h1 className="title">{title}</h1>
            <div>
                <table>
                    <tr>
                        <th>Menu</th>
                        <th>Harga</th>
                    </tr>
                    {menus.map((data) => (
                        <tr key={data.idmenu}>
                            <td>{data.menu}</td>
                            <td>Rp.{data.harga}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default Tabel;
