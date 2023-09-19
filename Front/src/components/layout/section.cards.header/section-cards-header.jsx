
const SectionHeader = ({ pageTitle, pageDescription }) => {
  return (
    <>
      <header className="section-cards__header">
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
      </header>
      
    </>
  );
};

export default SectionHeader;