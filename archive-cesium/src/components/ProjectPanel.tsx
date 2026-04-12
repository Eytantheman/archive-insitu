import type { HousingProject } from '../types';

interface Props {
  project: HousingProject | null;
  onClose: () => void;
}

export function ProjectPanel({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div style={{
      position: 'absolute',
      top: 0, right: 0, bottom: 0,
      width: 340,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(12px)',
      boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
      zIndex: 30,
      overflowY: 'auto',
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'system-ui, sans-serif',
    }}>
      <button
        onClick={onClose}
        style={{ alignSelf: 'flex-end', background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: '#666', padding: 0, lineHeight: 1 }}
      >✕</button>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#C4623A', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
          #{String(project.id).padStart(2, '0')}
        </span>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, lineHeight: 1.3, color: '#1a1a1a' }}>{project.name}</h2>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        <Chip>{project.city}</Chip>
        <Chip>{project.era}</Chip>
        {project.scale && <Chip>{project.scale}</Chip>}
      </div>

      <Row label="Architect">{project.architect}</Row>
      {project.social_org && <Row label="Organisation">{project.social_org}</Row>}

      {project.description && (
        <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: '#444' }}>{project.description}</p>
      )}

      {project.note && (
        <p style={{ margin: 0, fontSize: 12, color: '#888', fontStyle: 'italic', lineHeight: 1.6 }}>{project.note}</p>
      )}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      padding: '2px 10px',
      borderRadius: 20,
      background: '#f0ede9',
      fontSize: 11,
      color: '#555',
      fontFamily: 'monospace',
      letterSpacing: '0.03em',
    }}>{children}</span>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 8, fontSize: 13 }}>
      <span style={{ color: '#999', minWidth: 90, fontFamily: 'monospace', fontSize: 11, paddingTop: 1 }}>{label}</span>
      <span style={{ color: '#333', lineHeight: 1.5 }}>{children}</span>
    </div>
  );
}
