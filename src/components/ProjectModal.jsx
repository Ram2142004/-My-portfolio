import React, { useEffect } from 'react';
import { X, ExternalLink, Maximize2, Minimize2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div
        className={`modal-dialog-custom ${isFullscreen ? 'w-100 h-100 rounded-0 m-0' : ''}`}
        style={isFullscreen ? { maxWidth: '100vw', height: '100vh', borderRadius: 0 } : {}}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header-custom">
          <div className="d-flex align-items-center gap-2 min-w-0 flex-grow-1 me-2" style={{ minWidth: 0 }}>
            <span className="badge bg-success bg-opacity-20 text-success rounded-pill px-2.5 py-1 small fw-bold d-none d-sm-inline-block flex-shrink-0">
              Live Interactive Demo
            </span>
            <h4 className="fs-6 fw-bold mb-0 text-primary font-heading text-truncate" style={{ maxWidth: 'min(420px, 50vw)' }}>
              {project.title}
            </h4>
          </div>

          <div className="d-flex align-items-center gap-1.5 flex-shrink-0">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="btn btn-sm btn-outline-secondary py-1 px-2 text-muted border-0"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>

            {project.path && (
              <a
                href={project.path}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-primary py-1 px-2.5 d-inline-flex align-items-center gap-1 text-decoration-none small"
                title="Open in new window"
              >
                <span>New Tab</span>
                <ExternalLink size={14} />
              </a>
            )}

            <button
              onClick={onClose}
              className="btn btn-sm btn-outline-secondary py-1 px-2 text-muted border-0 ms-1"
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body with Live Iframe */}
        <div className="modal-body-custom position-relative">
          <iframe
            src={project.path}
            title={project.title}
            className="w-100 h-100"
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
}
