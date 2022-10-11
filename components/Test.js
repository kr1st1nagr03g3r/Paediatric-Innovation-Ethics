const htmlString = `<h1>I'm a string with HTML!</h1>`

export default function Test() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  )
}
