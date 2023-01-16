function Form() {
    return ( <>
    <form >
        <input type="text" name="book" id="book" placeholder="book name e.g mark, luke..." />
        <input type="text" name="chapter" id="chapter" placeholder="chapter number e.g 1, 2..." />
        <input type="text" name="verse" id="verse" placeholder="verse number e.g 1, 2..." />
        <button type="submit">Generate verse</button>
    </form>
    </> );
}

export default Form;