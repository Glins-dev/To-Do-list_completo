
const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="Filter">
        <h2></h2>
        <div className="filter-options">
            <div>
                <h2>STATUS:</h2>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <h2>ORDEM ALFABÉTICA:</h2>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Des")}>Desc</button>
            </div>
        </div>
        </div>
  )
}

export default Filter