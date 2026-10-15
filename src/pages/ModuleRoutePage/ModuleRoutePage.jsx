import { useParams } from "react-router-dom";

import ModulePage from "../../components/modules/ModulePage";
import useModulePageData from "../../hooks/useModulePageData";

const routeToDataKey = {
  intelligence: "intelligence",
  context: "context",
  workflows: "workflows",
  integrations: "integrations",
  activity: "activity",
  security: "security",
  settings: "settings",
  help: "help",
};

export default function ModuleRoutePage() {
  const { moduleName } = useParams();
  const pageKey = routeToDataKey[moduleName];
  const { data, loading, error } = useModulePageData(pageKey);

  if (loading) {
    return (
      <main className="os-dashboard-page">
        <div className="os-dashboard-loading" role="status">
          <span className="os-loading-orbit" />
          <strong>Loading workspace module</strong>
        </div>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="os-dashboard-page">
        <div className="os-dashboard-error" role="alert">
          <h1>Module unavailable</h1>
          <p>{error || "This workspace module could not be found."}</p>
        </div>
      </main>
    );
  }

  return <ModulePage pageKey={pageKey} data={data} />;
}
