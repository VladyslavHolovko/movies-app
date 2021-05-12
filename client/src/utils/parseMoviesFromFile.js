const parseMoviesFromFile = (string) => {
    const moviesStr = string.split(/\n(?=Title)/gi);

    const parsedMovies = moviesStr.map(movieStr => {
        if (!movieStr) return;

        try {
            const title = movieStr.match(/(?<=\bTitle:\s).*(?=\r)/gi)[0].trim();
            const releaseYear = movieStr.match(/(?<=\bRelease\sYear:\s).*(?=\r)/gi)[0];
            const format = movieStr.match(/(?<=\bFormat:\s).*(?=\r)/gi)[0].trim();
            const stars = movieStr.match(/(?<=\bStars:\s).*(?=\r)/gi)[0].trim().split(/,\s?/);

            return {
                title,
                releaseYear,
                format,
                stars
            };
        } catch (e) {
            console.log(e);
        }
    });

    return parsedMovies.filter(m => m);
}

export default parseMoviesFromFile;