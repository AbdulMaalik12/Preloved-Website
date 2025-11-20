export default function SchemaOrg({ data }) {
  const json = JSON.stringify(data)
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  )
}