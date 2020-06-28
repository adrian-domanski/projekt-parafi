import { useQuery } from "@apollo/react-hooks";
import { getInformations } from "../queries";
import { SectionTitle } from "../styles/styled";
import RenderHtml from "../components/RenderHtml";

const ImportantInformations = ({ sectionTitle }) => {
  const { data, loading } = useQuery(getInformations);

  return data && data.importantInformation.content.length ? (
    <section className="section">
      <SectionTitle>{sectionTitle}</SectionTitle>
      <div className="content">
        <RenderHtml
          loading={loading}
          content={!loading && data.importantInformation.content}
        />
      </div>
    </section>
  ) : null;
};

export default ImportantInformations;
