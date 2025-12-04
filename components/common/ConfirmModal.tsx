'use client';

interface ConfirmModalProps {
	isOpen: boolean;
	title: string;
	description?: string;
	confirmText?: string;
	cancelText?: string;
	onConfirm: () => void;
	onCancel: () => void;
}

export default function ConfirmModal({
	isOpen,
	title,
	description,
	confirmText = 'تأیید',
	cancelText = 'لغو',
	onConfirm,
	onCancel,
}: ConfirmModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
			<div className="bg-bg-secondary rounded-lg shadow-lg p-6 w-full max-w-sm">
				<h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
				{description && (
					<p className="text-text-secondary mb-4 text-sm leading-relaxed">
						{description}
					</p>
				)}

				<div className="flex justify-end gap-3 mt-4">
					<button
						onClick={onCancel}
						className="px-4 py-2 rounded-md border border-border text-text-primary hover:bg-bg-tertiary transition-colors">
						{cancelText}
					</button>

					<button
						onClick={onConfirm}
						className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors">
						{confirmText}
					</button>
				</div>
			</div>
		</div>
	);
}
