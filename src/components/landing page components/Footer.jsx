function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer> &copy; {year} Bibly. Built by <span> Abrusu Collins</span></footer>
      );
}

export default Footer;