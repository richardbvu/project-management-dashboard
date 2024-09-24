"use client";

import { useState } from "react";
import ProjectHeader from "../projectHeader";
import Board from "../BoardView";

type Props = {
  params: { id: string };
};
const Project = ({ params }: Props) => {
  // using the [id], nextjs feature
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  return (
    <div>
      {/* MODAL NEW TASK */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};
export default Project;
