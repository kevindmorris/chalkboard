import React from "react";

export default function Form({
  value,
  setValue,
  onSubmit,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form className="mb-3" onSubmit={onSubmit}>
      <label htmlFor="input" className="form-label">
        New Note
      </label>
      <input
        id="input"
        className="form-control"
        type="text"
        placeholder="Enter a new note..."
        autoComplete="off"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div className="d-flex justify-content-end gap-1 mt-2">
        <button
          className="btn btn-secondary btn-sm"
          type="button"
          onClick={() => setValue("")}
        >
          Reset
        </button>
        <button className="btn btn-primary btn-sm" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
