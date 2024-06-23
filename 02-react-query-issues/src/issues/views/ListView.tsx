import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";

export const ListView = () => {
  const [selectedLables, setSelectedLables] = useState<string[]>([]);

  const handleSelectedLabel = (labelName: string) => {
    selectedLables.includes(labelName)
      ? setSelectedLables(selectedLables.filter((label) => label !== labelName))
      : setSelectedLables([...selectedLables, labelName]);
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        <IssueList />
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLables}
          onSelectedLabel={(labelName) => handleSelectedLabel(labelName)}
        />
      </div>
    </div>
  );
};
