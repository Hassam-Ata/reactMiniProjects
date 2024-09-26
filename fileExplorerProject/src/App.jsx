
import { useState } from "react";

import useTraverseTree from "./hooks/useTraverseTree";
import "./styles.css";
import explorer from "./data/folderData"
import RenderFolder from "./components/RenderFolder";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <RenderFolder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

// fix connect script in latest video
