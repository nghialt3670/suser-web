import { z } from "zod";

export const vehicleUpdateSchema = z.object({
  licensePlate: z.string()
    .min(1, "Biển số xe là bắt buộc")
    .regex(/^[0-9]{2}[A-Z]-[0-9]{5}$/, "Biển số xe phải có định dạng XXA-XXXXX"),
  
  brand: z.string()
    .min(1, "Hãng xe là bắt buộc"),
  
  model: z.string()
    .min(1, "Model là bắt buộc"),
  
  type: z.enum(['Xe khách', 'Xe tải', 'Xe van']),
  
  yearOfManufacture: z.number()
    .min(1900, "Năm sản xuất phải từ 1900")
    .max(new Date().getFullYear() + 1, "Năm sản xuất không được vượt quá năm hiện tại"),
  
  engineNumber: z.string().optional(),
  chassisNumber: z.string().optional(),
  
  fuelType: z.enum(['Dầu diesel', 'Xăng', 'Điện', 'Hybrid']),
  
  loadCapacity: z.number()
    .min(0, "Tải trọng phải lớn hơn 0")
    .optional(),
  
  numberOfSeats: z.number()
    .min(1, "Số chỗ ngồi phải lớn hơn 0")
    .optional(),
  
  color: z.string().optional(),
  
  purchaseDate: z.date().optional(),
  
  purchasePrice: z.number()
    .min(0, "Giá mua phải lớn hơn 0")
    .optional(),
  
  registrationExpiryDate: z.date().optional(),
  insuranceExpiryDate: z.date().optional(),
  inspectionExpiryDate: z.date().optional(),
  
  kilometersDriven: z.number()
    .min(0, "Số km phải lớn hơn 0"),
  
  notes: z.string().optional(),
  
  images: z.array(z.string()).optional(),
  
  status: z.enum(['Hoạt động', 'Bảo dưỡng', 'Sửa chữa']),
  
  nextMaintenanceDate: z.date()
    .min(new Date(), "Ngày bảo dưỡng tiếp theo phải trong tương lai"),
});
