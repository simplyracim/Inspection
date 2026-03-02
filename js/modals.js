// ============================================
// SERVICE MODALS
// ============================================

const serviceData = {
    conventional: {
        title: 'Conventional NDT',
        content: `
            <h3 class="font-display text-2xl font-bold mb-4 text-white">Conventional NDT Methods</h3>
            <p class="text-gray-300 mb-6">Our conventional NDT services provide reliable, cost-effective inspection solutions for routine maintenance and quality control.</p>
            <ul class="space-y-3 mb-6 text-gray-300">
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>VT (Visual Testing):</strong> Direct visual inspection and Remote Visual Inspection (RVI) using borescope.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>UT (Ultrasonic Testing):</strong> Thickness measurements (UTG), spot checks, basic flaw detection.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>PT (Liquid Penetrant):</strong> Surface-breaking defect detection on non-porous materials.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>MT (Magnetic Particle):</strong> Surface and near-surface defects in ferromagnetic materials.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>RT (Radiographic Testing):</strong> Volumetric inspection for welds and components.</div></li>
            </ul>
        `
    },
    advanced: {
        title: 'Advanced NDT',
        content: `
            <h3 class="font-display text-2xl font-bold mb-4 text-white">Advanced NDT Techniques</h3>
            <p class="text-gray-300 mb-6">High-value techniques for complex inspection challenges requiring detailed characterization and sizing.</p>
            <ul class="space-y-3 mb-6 text-gray-300">
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>PAUT (Phased Array):</strong> Weld inspection, sizing, corrosion mapping, advanced flaw characterization.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>TOFD (Time of Flight Diffraction):</strong> Weld integrity assessment and accurate defect sizing.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>Guided Wave UT (LRUT):</strong> Long-range pipeline screening for non-piggable/difficult access lines.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>ACFM (Alternating Current Field):</strong> Crack detection and sizing through coatings.</div></li>
            </ul>
        `
    },
    tube: {
        title: 'Tube Inspection',
        content: `
            <h3 class="font-display text-2xl font-bold mb-4 text-white">Heat Exchanger & Air Cooler Inspection</h3>
            <p class="text-gray-300 mb-6">Specialized techniques for tubular heat transfer equipment to ensure reliable operation and maintenance planning.</p>
            <ul class="space-y-3 mb-6 text-gray-300">
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>ECT (Eddy Current):</strong> For non-ferromagnetic tubes, detects pits, cracks, and wall loss.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>RFT (Remote Field):</strong> For ferromagnetic tubes, detects internal and external defects.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>IRIS (Internal Rotary):</strong> Ultrasonic technique for accurate wall thickness measurements.</div></li>
            </ul>
        `
    },
    drone: {
        title: 'Drone Inspection',
        content: `
            <h3 class="font-display text-2xl font-bold mb-4 text-white">Aerial Industrial Inspection</h3>
            <p class="text-gray-300 mb-6">Safe, efficient aerial surveys for hard-to-reach structures without scaffolding or rope access.</p>
            <ul class="space-y-3 mb-6 text-gray-300">
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>Visual Surveys:</strong> High-resolution imaging of stacks, flares, tanks, structures, pipe racks, roofs.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>Thermography:</strong> IR payload for detecting heat anomalies, insulation defects, and electrical issues.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>Photogrammetry:</strong> 3D modeling and digital twins for asset documentation.</div></li>
            </ul>
        `
    },
    robotics: {
        title: 'Robotic Inspection',
        content: `
            <h3 class="font-display text-2xl font-bold mb-4 text-white">Robotic & Crawler Solutions</h3>
            <p class="text-gray-300 mb-6">Confined space and hazardous environment inspection without human entry.</p>
            <ul class="space-y-3 mb-6 text-gray-300">
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>Tank Inspection:</strong> Crawlers for floor and shell examination while in service or out of service.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>Vessel Entry:</strong> Magnetic crawlers for vertical surfaces and complex geometries.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>NDT Payloads:</strong> UT thickness measurement, visual, and other sensor integration.</div></li>
            </ul>
        `
    },
    shutdown: {
        title: 'Turnaround Support',
        content: `
            <h3 class="font-display text-2xl font-bold mb-4 text-white">Shutdown & Turnaround Services</h3>
            <p class="text-gray-300 mb-6">Rapid mobilization and execution to keep your critical path on schedule.</p>
            <ul class="space-y-3 mb-6 text-gray-300">
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>Rapid Mobilization:</strong> Teams ready for emergency and planned shutdowns.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>Expedited Reporting:</strong> Same-day or next-day reports for critical path decisions.</div></li>
                <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-sit-accent mt-0.5"></i><div><strong>Punch List Support:</strong> Final documentation and closeout assistance.</div></li>
            </ul>
        `
    }
};

function initModals() {
    // Modal functions are global
}

function openServiceModal(service) {
    const modal = document.getElementById('service-modal');
    const modalBody = document.getElementById('modal-body');
    const modalTitle = document.getElementById('modal-title');
    
    if (!modal || !modalBody || !serviceData[service]) return;
    
    modalTitle.textContent = serviceData[service].title;
    modalBody.innerHTML = serviceData[service].content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
        closeServiceModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});