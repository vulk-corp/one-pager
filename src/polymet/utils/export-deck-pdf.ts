import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportDeckToPDF(swiperInstance: any) {
  const totalSlides = swiperInstance.slides.length;
  const originalIndex = swiperInstance.activeIndex;

  // Create PDF in landscape mode (16:9 aspect ratio)
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [1920, 1080], // Standard presentation dimensions
  });

  // Hide UI elements during capture
  const hideElements = (hide: boolean) => {
    const selectors = [
      '.swiper-button-next',
      '.swiper-button-prev',
      '.swiper-pagination',
      '[aria-label="Download deck as PDF"]',
      '[aria-label="Switch to one-pager view"]',
      '[aria-label="Switch to deck view"]',
    ];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        (el as HTMLElement).style.display = hide ? 'none' : '';
      });
    });
  };

  try {
    // Hide navigation and UI elements
    hideElements(true);

    // Process each slide
    for (let i = 0; i < totalSlides; i++) {
      // Navigate to the slide
      swiperInstance.slideTo(i, 0); // Instant navigation (0ms duration)

      // Wait for slide to render
      await new Promise(resolve => setTimeout(resolve, 800));

      // Get the active slide element
      const activeSlide = swiperInstance.slides[i] as HTMLElement;

      // Get the section element inside the slide (the actual content)
      const sectionElement = activeSlide.querySelector('section') as HTMLElement;

      if (!sectionElement) {
        console.warn(`No section found in slide ${i + 1}`);
        continue;
      }

      // Capture the section element directly
      const canvas = await html2canvas(sectionElement, {
        scale: 2, // Higher quality
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: null, // Preserve background colors
        width: 1920,
        height: 1080,
        windowWidth: 1920,
        windowHeight: 1080,
      });

      // Convert canvas to image
      const imgData = canvas.toDataURL("image/png", 1.0);

      // Add new page for slides after the first
      if (i > 0) {
        pdf.addPage([1920, 1080], "landscape");
      }

      // Calculate dimensions to fit and center
      const canvasRatio = canvas.width / canvas.height;
      const pageRatio = 1920 / 1080;

      let width = 1920;
      let height = 1080;
      let x = 0;
      let y = 0;

      if (canvasRatio > pageRatio) {
        // Canvas is wider
        height = width / canvasRatio;
        y = (1080 - height) / 2;
      } else {
        // Canvas is taller
        width = height * canvasRatio;
        x = (1920 - width) / 2;
      }

      // Add image to PDF
      pdf.addImage(imgData, "PNG", x, y, width, height, undefined, "FAST");
    }

    // Show UI elements again
    hideElements(false);

    // Return to original slide
    swiperInstance.slideTo(originalIndex, 0);

    // Download the PDF
    pdf.save("vulk-pitch-deck.pdf");
  } catch (error) {
    // Make sure to show UI elements and return to original slide even if there's an error
    hideElements(false);
    swiperInstance.slideTo(originalIndex, 0);
    throw error;
  }
}
