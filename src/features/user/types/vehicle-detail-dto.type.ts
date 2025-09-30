export interface VehicleDetailDto {
    id: string
    licensePlate: string
    brand: string
    model: string
    type: string
    yearOfManufacture: number
    engineNumber?: string
    chassisNumber?: string
    fuelType: string
    loadCapacity?: number
    numberOfSeats?: number
    color?: string
    purchaseDate?: Date
    purchasePrice?: number
    registrationExpiryDate?: Date
    insuranceExpiryDate?: Date
    inspectionExpiryDate?: Date
    kilometersDriven: number
    notes?: string
    images?: string[]    
    status: string
    nextMaintenanceDate: Date
    createdAt: Date
    updatedAt: Date
}