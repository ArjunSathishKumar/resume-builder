import { WithContext as ReactTags } from 'react-tag-input';
import SKILLS from "../constants/skills";

const suggestions = SKILLS.map((skill) => {
  return {
    id: skill,
    text: skill,
  };
});

const TagInput = ({ input, meta, ...rest }) => {
  return (
    <ReactTags
      {...input}
      tags={input.value}
      allowUnique
      suggestions={suggestions}
      placeholder="Enter skills"
      allowDragDrop={false}
      allowBackspace={true}
      handleDelete={(index) => {
        const newTags = [...input.value];
        newTags.splice(index, 1);
        input.onChange(newTags);
      }}
      handleAddition={(tag) => {
        const newTags = [...input.value, tag];
        input.onChange(newTags);
      }}
      autocomplete
    />
  );
};

export default TagInput;
