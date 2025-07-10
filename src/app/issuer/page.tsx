import ProjectForm from '@/components/ProjectForm';
import ProjectList from '@/components/ProjectList';

export default function IssuerPage() {
  return (
    <div className="space-y-8">
      <ProjectForm />
      <ProjectList />
    </div>
  );
}