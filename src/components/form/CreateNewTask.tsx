import { useState } from 'react';

import { Input } from 'components/form/Input';
import { Button } from 'components/form/Button';

import { CategorySelect } from 'components/form/CategorySelect';

type CreateNewTaskProps = {
  onSubmit: (form: { title: string; categoryId: string }) => Promise<void>;
};

export const CreateNewTask = ({ onSubmit }: CreateNewTaskProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: '',
    categoryId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (categoryId: string) => {
    setForm({
      ...form,
      categoryId,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await onSubmit(form);
    setForm({
      title: '',
      categoryId: '',
    });
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="border-b border-dashed border-gray-700 mt-8 mb-8 pb-8">
      <div className="flex space-x-1">
        <div className="flex-1">
          <Input
            type="text"
            name="title"
            placeholder="write your task here"
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div className="w-44">
          <CategorySelect onChange={handleCategoryChange} />
        </div>

        <Button type="submit" disabled={submitting}>
          {submitting ? 'loading...' : 'Create'}
        </Button>
      </div>
    </form>
  );
};
