CREATE TABLE `contact_us` (
	`id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(10) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_us_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `services_survey` (
	`id` int AUTO_INCREMENT NOT NULL,
	`full_name` varchar(255) NOT NULL,
	`organization_name` varchar(255) NOT NULL,
	`organization_email` varchar(255) NOT NULL,
	`organization_phone` varchar(255) NOT NULL,
	`pathname` varchar(255) NOT NULL,
	`survey_data` json NOT NULL,
	`created_at` datetime NOT NULL DEFAULT '2024-04-30 15:48:00.794',
	CONSTRAINT `services_survey_id` PRIMARY KEY(`id`),
	CONSTRAINT `services_survey_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` RENAME COLUMN `user_type` TO `role`;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `role` enum('user','admin','super_admin') NOT NULL DEFAULT 'user';--> statement-breakpoint
ALTER TABLE `callback` ADD `name` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `first_name` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `last_name` varchar(255) NOT NULL;