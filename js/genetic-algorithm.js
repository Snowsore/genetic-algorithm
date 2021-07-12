(() => {

    window.geneticAlgorithm = function(population, eval, selection, repleace, mutation) {

        var step = 1

        return {
            step() {

                // Evaluate all
                var popFit = population.map(x => [...x, eval(x)])

                // Sort by fitness
                popFit = popFit.sort((a, b) => b[2] - a[2])

                // Repleace menber by parents
                population = population.map(x => {
                    return repleace(selection(popFit))
                })

                // Mutation
                population = population.map(x => mutation(x))

                return {
                    solution: population,
                    steps: step++
                }
            }
        }
    }
})()