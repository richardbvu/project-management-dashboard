import { useCreateProjectMutation } from "@/state/api";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const ModalNewProject = ({ isOpen, onClose }: Props) => {
  const [createProject, { isLoading }] = useCreateProjectMutation();
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async () => {
    if (!projectName || !startDate || !endDate) return;
  };
  return <div>ModalNewProject</div>;
};
export default ModalNewProject;
