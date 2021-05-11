const parseMoviesFromFile = (string) => {
    const moviesStr = string.split(/\n(?=Title)/gi);

    return moviesStr.map(movieStr => {
        if (!movieStr) return;

        try {
            return {
                title: movieStr.match(/(?<=\bTitle:\s).*(?=\r)/gi)[0],
                releaseYear: movieStr.match(/(?<=\bRelease\sYear:\s).*(?=\r)/gi)[0],
                format: movieStr.match(/(?<=\bFormat:\s).*(?=\r)/gi)[0],
                stars: movieStr.match(/(?<=\bStars:\s).*(?=\r)/gi)[0].split(/,\s?/)
            }
        } catch (e) {
            console.log(e);
        }
    });
}

export default parseMoviesFromFile;