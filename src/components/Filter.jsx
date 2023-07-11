
const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="Filter">
        <h2>Filter</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Des")}>Desc</button>
            </div>
        </div>
        </div>
  )
}

export default Filter