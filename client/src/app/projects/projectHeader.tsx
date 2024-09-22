import { useState } from "react";

type Props = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};
const projectHeader = ({ activeTab, setActiveTab }: Props) => {
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);
  return (
    <div className="px-4 xl:px-6">
      {/* MODAL NEW PROJECT */}
      <div></div>
    </div>
  );
};
export default projectHeader;
