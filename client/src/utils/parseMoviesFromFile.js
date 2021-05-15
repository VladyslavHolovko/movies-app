const parseMoviesFromFile = (string) => {
    try {
        const moviesStr = string.split(/\n(?=Title)/gi);

        const parsedMovies = moviesStr.map(movieStr => {
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
        });

        return {
            isValid: true,
            data: parsedMovies
        }
    } catch (e) {
        return {
            valid: false,
            data: null
        }
    }
}

export default parseMoviesFromFile;