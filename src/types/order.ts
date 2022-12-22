export default interface Order {
	id: number
	date: string
	time: string
	title: string
	persons: number
	amount: number
	paymentType: string
	status: string
	qrcode: string
}
