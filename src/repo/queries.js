import { Courts } from "./postgres.js"

export const selectAll = async () => {
  return await Courts.findAll()
}

export const addMosAPIData = async (data) => {
  selectAll()
      .then(async rows => {
        if (Object.keys(rows).length) {
          await Courts.destroy({
            truncate: true,
          })
              .then(async () => {
                for (const datum of data) {
                  await Courts.create(datum)
                }
              })
        } else {
          for (const datum of data) {
            await Courts.create(datum)
          }

        }
      })
}

export const selectOne = async (id) => {
  return await Courts.findAll({
    where: {
      id: id,
    }
  })
}
