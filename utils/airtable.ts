import Airtable, { FieldSet, Record } from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY_DIRECTORY as string
)

const getSme = (rowId: string) => {
  return new Promise((resolve, reject) => {
    base('Directory').find(rowId, function (err, record) {
      if (err) {
        reject(err)
      }
      return resolve(record)
    })
  })
}

const getSmes = () => {
  const smes = [] as Record<FieldSet>[]

  return new Promise((resolve, reject) => {
    base('Directory')
      .select({
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record: Record<FieldSet>) {
            smes.push(record)
          })

          fetchNextPage()
        },
        function done(err) {
          if (err) return reject(err)

          return resolve(smes)
        }
      )
  })
}

export { getSme, getSmes }
