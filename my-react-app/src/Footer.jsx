
function Footer(){
    return(
        <footer>
            {/* Menambahkan copyrigh dan methode getFullYear untuk menampilkan tahun sekarang */}
            <p>&copy;{new Date().getFullYear()} Agum </p>
        </footer>
    );
}
export default Footer